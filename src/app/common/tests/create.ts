export interface ValidationStatus {
    valid: boolean;
    error: string;
    notValidIds?: Array<number>;
    notValidNumber?: Array<number>;
}
