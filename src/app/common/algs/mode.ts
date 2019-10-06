export class Mode {
    private mode: boolean;
    
    constructor(mode: boolean) {
        this.mode = mode;
    }
    
    value() {
        return this.mode;
    }
    
    change() {
        this.mode = !this.mode;
    }
    
    toEncrypt() {
        return this.mode ? 'Encrypt' : 'Decrypt';
    }
    
    toEncode() {
        return this.mode ? 'Encode' : 'Decode';
    }
}
