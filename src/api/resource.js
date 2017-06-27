import {API_ROOT} from './config.js';



const apiDemo = {
  getTmpList:'/template/templetList'
};

export const TmpListResource = API_ROOT.concat(apiDemo.getTmpList);
