import { registerStore } from "@wordpress/data";

import reducer from "./reducer";
import * as actions from "./actions";
import * as selectors from "./selectors";
import * as resolvers from "./resolvers";

registerStore("dropit", { actions, selectors, resolvers, reducer });
