
import db from '../database/db'

class modelsUsers {



    getAllUsers() {
        return new Promise((resolve, reject) => {
            db.select('*').from('users')
                .then((res) => {
                    resolve({
                        status: "SUCCESS",
                        data: res
                    })
                }).catch((e) => {
                    reject(e)
                })
        })
    }

}

export default new modelsUsers();
