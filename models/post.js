
import db from '../database/db'

class modelsPost {

    createPost(req = "") {
        return new Promise((resolve, reject) => {
            db('ms_post').insert({
                title: req.title,
                content: req.content,
                slug: req.slug
            }).then((res) => {
                resolve(res)

            }).catch((e) => {
                reject(e)
            })
        })
    }

    getAllPost() {
        return new Promise((resolve, reject) => {
            db.select('title', 'content', 'slug').from('ms_post')
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

    updatePost(req = "") {
        return new Promise((resolve, reject) => {
            db('ms_post').update({
                title: req.title,
                content: req.content,
                slug: req.slug
            }).where({ id: req.id })
                .then((res) => {
                    resolve(res)

                }).catch((e) => {
                    reject(e)
                })
        })
    }


    deletePost(req = "") {
        return new Promise((resolve, reject) => {
            db('ms_post').where({ id: req.id }).del()
                .then((res) => {
                    resolve(res)

                }).catch((e) => {
                    reject(e)
                })
        })
    }


}

export default new modelsPost();
