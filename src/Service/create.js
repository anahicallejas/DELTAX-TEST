import data from '../data'

class crud {

    create(newItem){
        data.push(newItem)
        console.log(data)
    }
}

export default new crud();