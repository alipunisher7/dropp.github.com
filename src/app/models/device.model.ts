interface IDivece {
  OS?: string;
  OSVersion?: string;
}

export class Device implements IDivece {
  OS: string;
  OSVersion: string;

  constructor(device?: IDivece) {
    this.OS = (!device || !device.OS) ? '-' : device.OS;
    this.OSVersion = (!device || !device.OSVersion) ? '-' : device.OSVersion;
  }
}
