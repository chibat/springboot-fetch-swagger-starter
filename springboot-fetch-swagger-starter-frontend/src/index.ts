
import {ApplicationApi} from "./swagger/api";

const api = new ApplicationApi();
api.basePath = window.location.origin;

api.addUsingGET({arg1: 1, arg2: 2}).then(it=>{alert(it.result)});

