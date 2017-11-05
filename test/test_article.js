'use strict'

const chai = require('chai')
const should = chai.should()
const axios = require('axios')


describe('GET route/article', ()=>{
    it('test connect to endPoint return Status OK !!!', ()=>{
        return axios.get('http://localhost:3000/article')
        .then(Response =>{
            Response.status.should.equal(200)
        })
    })

    it('Test API return Array', ()=>{
        return axios.get('http://localhost:3000/article')
        .then(Response=>{
            Response.data.should.be.a('array')
        })
    })
})



