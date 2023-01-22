import mockData from "./mock_data/mockdata";

export let getAllDatas = function() {
    return mockData;
}

export let getObjectById = function(id: number) {
    return mockData.find(() => id === id);
}
