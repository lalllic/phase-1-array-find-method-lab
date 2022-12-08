function superbowlWin(objArr) {
    const foundRecord = objArr.find(obj => obj.result === "W");
    if (!foundRecord) return;
    return foundRecord.year;
}