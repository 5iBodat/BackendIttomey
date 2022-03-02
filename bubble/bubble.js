
const bubbleShort = async (req, res) =>{
    let arr = req.body.arr;
    let newArr = arr.toString().split('');
        for(let i = 0; i < newArr.length; i++){
            for(let j = 1; j < newArr.length; j++){
            if(newArr[j - 1] > newArr[j]){
                let tmp = newArr[j-1]
                newArr[j-1] = newArr[j]
                newArr[j] = tmp
            }
        }
    }
    return res.status(200).json({"values": newArr})
}


export default bubbleShort;