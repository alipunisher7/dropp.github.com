interface IDivece {
  OS?: string;
  OSVersion?: string;
}

export class Device implements IDivece {
  OS: string;
  OSVersion: string;

  constructor(device?: IDivece) {
    this.OS = device.OS || 'N/A';
    this.OSVersion = device.OSVersion || 'N/A';
  }
}
