const path = require('path');
const {worker,isMainThread} = require('worker_threads');

const pathToResizeWorker = path.resolve(__dirname,'resizeWorker.js');
const pathToMonochromeWorker = path.resolve(__dirname,'monochromeWorker.js');
const imageProcessor =()=>{
  return new Promise((resolve,reject)=>{
    if(isMainThread){
        resolve();
    }
    else{
        reject(new Error('not on main thread'));
    }
  })
};

const uploadPathResolver = (filename)=>{
    path.resolve(__dirname,'../uploads',filename)
}

module.exports = {imageProcessor};