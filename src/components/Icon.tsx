import React from "react";

// yarn add --dev @types/webpack-env 安装 __WebpackModuleApi
// 引入并遍历icons文件夹内的svg文件
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
    requireContext.keys().forEach(requireContext)
}
try {importAll(require.context('../icons', true, /\.svg$/))}
catch (error) {console.log(error)}

type Props = {
    name: String
}

const Icon = (props: Props) => {
    return (
        <svg className="icon">
            <use xlinkHref={'#'+ props.name}/>
        </svg>
    )
}

export default Icon;
