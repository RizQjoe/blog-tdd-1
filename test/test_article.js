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


describe('POST route/ article', ()=>{
    it('test connect to endpoint return status OK !!!', ()=>{
        return axios.post('http://localhost/article')
        .then(response=>{
            response.status.should.equal(200)
        })
    })
    it('its POST data to DB return log data', ()=>{
        return axios.post('http://localhost:3000/article', {
            judul: 'coba db mongo',
            detail: 'coba coba melempar mongo',
            author: 'RizQjoe'
        })
        .then(response=>{
            response.data.judul.should.equal('coba db mongo')
        })
    })
})





