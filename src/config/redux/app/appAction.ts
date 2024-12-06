import {getRequest} from "../../requests";
import {remoteUrl} from "../../url";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchAdditionalData = createAsyncThunk("app/fetchArticles", async (token: string, thunkAPI) => {

    try {
        const [categoriesResp, sourcesResp, authorsResp] = await Promise.all([
            getRequest(token, remoteUrl.categories),
            getRequest(token, remoteUrl.sources),
            getRequest(token, remoteUrl.authors)
        ]);

        const categories = categoriesResp.status ? categoriesResp.data : null;
        const sources = sourcesResp.status ? sourcesResp.data : null;
        const authors = authorsResp.status ? authorsResp.data : null;

        if (categories && sources && authors) {
            return {
                categories,
                sources,
                authors
            };
        }
        return thunkAPI.rejectWithValue(null)
    } catch (error) {
        console.error("Error fetching data:", error);
        return thunkAPI.rejectWithValue(null)
    }

})