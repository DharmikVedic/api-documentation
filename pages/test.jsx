import { JavascriptCodeHightlight} from "../components/codeHightlight/javascript";
import {JsonCodeHightlight} from "../components/codeHightlight/json";
import React from "react";
import {TabCodeHightlight} from "../components/codeHightlight/tabCodeHightlight";

export default function Test(){
    return(
        <div className='m-10'>
            {/*<JsonCodeHightlight/>*/}
            <TabCodeHightlight tab={["javascript","php"]}/>
{/*            <JavascriptCodeHightlight>*/}
{/*                {`<RequestExample>*/}

{/*   \`\`\`bash Request*/}
{/*   curl --request POST \\*/}
{/*    --url https://dog-api.kinduff.com/api/facts*/}
{/*    \`\`\`*/}
{/*</RequestExample>`}*/}
{/*            </JavascriptCodeHightlight>*/}
        </div>
    )
}