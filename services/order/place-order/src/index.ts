import middy from "middy";

import * as handler from "./handler";

exports.handler = middy(handler.create());
