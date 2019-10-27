export enum AlgsModes {
    ENCRYPT = 'Encrypt',
    DECRYPT = 'Decrypt'
}

export enum AlgorithmCommands {
    ENCRYPT = 'encrypt',
    DECRYPT = 'decrypt',
    CODE = 'encode',
    DECODE = 'decode',
    HASH = 'hash',
    GEN_KEYS = 'keys',
    GET_BLOCKS = 'blocks',
    SIGN = 'sign-message',
    CHECK_SIGN = 'check-sign',
    UPLOAD_FILE = 'upload',
    COMPRESSION = 'compression'
}

export enum DisplayedButtons {
    KEY_GEN = 'withKeysGeneration',
    START = 'withStart',
    ENCRYPT = 'withEncrypt',
    ENCODE = 'withEncode',
    CHECK_SIGN = 'withCheckSign',
    FILE_COMPRESSION = 'withFileCompression',
    STRING_COMPRESSION = 'withStringCompression'
}
