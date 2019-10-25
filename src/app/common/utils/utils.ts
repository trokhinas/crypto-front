export const copyObject = (object : any) => {
    return JSON.parse(JSON.stringify(object));
};
