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

export interface IFoodData {
    name: string,
    description: string,
    price: number,
    gallery: string
}

export interface IFoodCategory{
    appetizers: IFoodData[],
    mainDishes: IFoodData[],
    desserts: IFoodData[],
    drinks: IFoodData[]
}
    
export async function getFoodData({setFoodData}:{setFoodData: (foodData:IFoodCategory[])=>void}){
try{
    const foodData = await import(
        "../public/food.json"
    );

    if (!foodData) {
        throw new Error("No food data found, please try again later.");
    }

    setFoodData(foodData.food);
}catch(error){
    throw new Error(`${error}`);
        }
    }