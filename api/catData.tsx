export interface ICatData {
breed: string,
latinName: string,
furColors: string[],
eyeColors: string[],
averageWeight: Record<'male' | 'female', string>,
bodySizeAndShape: string,
furPattern: string[],
gallery: string
}

export async function getCatData({setCatData}:{setCatData: (catData:ICatData[])=>void}){
    try{
        const catData = await import(
            "../public/cats.json"
        );

        if (!catData) {
            throw new Error("No cat data found, please try again later.");
        }

        setCatData(catData.cats);
    }catch(error){
        throw new Error(`${error}`);
    }
}