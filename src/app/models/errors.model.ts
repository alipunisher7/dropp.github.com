export interface IError {
  code: string;
}
const errorCodesNames = {
  "-1": "در ذخیره اطلاعات تداخل پیش آمد",
  "-2": "اطلاعات خواسته شده یافت نشد",
  "-3": "شماره همراه وارد شده تکراری است",
  "-4": "نام کاربری وارد شده تکراری است",
  "-5": "اکانت کاربر فعال نشده است زیرا کد اعتبار سنجی راهنوز وارد نکرده است",
  "-6": "موبایل کاربر در سیستم ثبت نشده است بنابراین GCMKEY و OneSignalKey نداردو لازم است برای ادامه ابتدا موبایل کاربر در سیستم ثبت شود",
  "-7": "کاربر لاگین نکرده است",
  "-8": "موضوع وارد شده وجود دارد",
  "-9": "نوع سرویس وارد شده تکراری است",
  "-10": "تعرفه برای سرویس مورد نظر وجود ندارد",
  "-11": "عملیات بازنشانی اطلاعات وب سرویس کلاینت انجام نشده است",
  "-12": "خودروسازی وارد شده تکراری است",
  "-13": "خودروی وارد شده تکراری است",
  "-14": "نقش پدر و فرزند در موضوع تیکت ها یکسان نمی باشد",
  "-15": "استان وارد شده تکراری است",
  "-16": "شهر وارد شده تکراری است",
  "-23": "فرمت شماره موبایل ورودی اشتباه است",
  "-20": "فرمت Json ورودی اشتباه است",
  "-100": "خطای ناشناخته و غیر منتظره ای رخ داده است",
  "-21": "نام کاربری وارد شده یا کوچکتر از 3 حرف است یا حرف اول آن عدد است",
  "-22": "رمز عبور وارد شده کمتر از 5 حرف است",
  "-30": "اطلاعات همخوانی ندارد",
  "-500": "خطای سرور، با ادمین تماس بگیرید",
  "-40": "اطلاعات ارسالی درست نیست، با ادمین تماس بگیرید",
  "-402": "لطفا مجددا وارد شوید",
}

export class Error implements IError {
  code: string;
  static getName(code) {
    return errorCodesNames[code];
  }
  constructor(error: IError) {
    this.code = error.code;
  }
}