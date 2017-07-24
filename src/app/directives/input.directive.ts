import {
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Optional,
  Output,
  QueryList,
  Renderer2,
  Self
} from '@angular/core';

import { coerceBooleanProperty, getSupportedInputTypes } from '@angular/cdk';
import {FormGroupDirective, NgControl, NgForm, FormControl} from '@angular/forms';

@Directive({
  selector: `input[tsInput], textarea[tsInput]`,
  host: {
    'class': 'ts-input',
    // Native input properties that are overwritten by Angular inputs need to be synced with
    // the native input element. Otherwise property bindings for those don't work.
    '[placeholder]': 'placeholder',
    '[disabled]': 'disabled',
    '[required]': 'required',
    '(blur)': '_onBlur()',
    '(focus)': '_onFocus()',
    '(input)': '_onInput()',
  }

})
export class InputDirective {

  /** Variables used as cache for getters and setters. */
  private _type = 'text';
  private _placeholder: string = '';
  private _disabled = false;
  private _required = false;
  private _id: string;

  focused = false;

  @Input()
  get disabled() {
    return this._ngControl ? this._ngControl.disabled : this._disabled;
  }
  set disabled(value: any) {
    this._disabled = coerceBooleanProperty(value);
  }

  /** Placeholder attribute of the element. */
  @Input()
  get placeholder() { return this._placeholder; }
  set placeholder(value: string) {
    if (this._placeholder !== value) {
      this._placeholder = value;
      this._placeholderChange.emit(this._placeholder);
    }
  }

  /** Whether the element is required. */
  @Input()
  get required() { return this._required; }
  set required(value: any) { this._required = coerceBooleanProperty(value); }

  /** Input type of the element. */
  @Input()
  get type() { return this._type; }
  set type(value: string) {
    this._type = value || 'text';

    // When using Angular inputs, developers are no longer able to set the properties on the native
    // input element. To ensure that bindings for `type` work, we need to sync the setter
    // with the native property. Textarea elements don't support the type property or attribute.
    if (!this._isTextarea() && getSupportedInputTypes().has(this._type)) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'type', this._type);
    }
  }

  /** A function used to control when error messages are shown. */
  /** The input element's value. */
  get value() { return this._elementRef.nativeElement.value; }
  set value(value: string) { this._elementRef.nativeElement.value = value; }

  get hasValue() { return this.value.length > 0 }
  /**
   * Emits an event when the placeholder changes so that the `md-input-container` can re-validate.
   */
  @Output() _placeholderChange = new EventEmitter<string>();

  /** Whether the input is empty. */
  get empty() {
    return (this.value == null || this.value === '') &&
      // Check if the input contains bad input. If so, we know that it only appears empty because
      // the value failed to parse. From the user's perspective it is not empty.
      // TODO(mmalerba): Add e2e test for bad input case.
      !this._isBadInput();
  }

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
    @Optional() @Self() public _ngControl: NgControl,
    @Optional() private _parentForm: NgForm,
    @Optional() private _parentFormGroup: FormGroupDirective) { }

  /** Focuses the input element. */
  focus() { this._elementRef.nativeElement.focus(); }

  _onFocus() {
    this.focused = true;
  }

  _onBlur() { this.focused = false; }

  _onInput() {
    // This is a noop function and is used to let Angular know whenever the value changes.
    // Angular will run a new change detection each time the `input` event has been dispatched.
    // It's necessary that Angular recognizes the value change, because when floatingLabel
    // is set to false and Angular forms aren't used, the placeholder won't recognize the
    // value changes and will not disappear.
    // Listening to the input event wouldn't be necessary when the input is using the
    // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
  }

  private _isBadInput() {
    // The `validity` property won't be present on platform-server.
    let validity = (this._elementRef.nativeElement as HTMLInputElement).validity;
    return validity && validity.badInput;
  }

  /** Determines if the component host is a textarea. If not recognizable it returns false. */
  private _isTextarea() {
    let nativeElement = this._elementRef.nativeElement;

    // In Universal, we don't have access to `nodeName`, but the same can be achieved with `name`.
    // Note that this shouldn't be necessary once Angular switches to an API that resembles the
    // DOM closer.
    let nodeName = nativeElement.nodeName;
    return nodeName ? nodeName.toLowerCase() === 'textarea' : false;
  }
}
