export const Data = () => {
    let dataArray = []

    for (let i = 10; i > 0; --i) {
        dataArray.push({
            name: "Some Strain",
            image: "https://media.gettyimages.com/photos/medical-marijuana-picture-id874041882?s=2048x2048",
            desc: "Description",
            rating: "Rating",
            key: i
        });
    }

    return dataArray;
}



