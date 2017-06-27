/**
 * Created by Administrator on 2017/6/7.
 */
import axios from 'axios';

import {
 TmpListResource
} from './resource';


export default {
  getTmpLists (query) {
    return axios.get(TmpListResource, {
      params:query
    });
  },
}
