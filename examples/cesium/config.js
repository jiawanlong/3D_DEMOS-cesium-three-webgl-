/* by jiawanlong*/
var identification = {
    name: "Leaflet"
};
var exampleConfig = {
    "base": {
        name: "1、基础",
        name_en: "base",
        content: {
            "map": {
                name: "基础",
                name_en: "base",
                content: [{
                    name: "基础用法",
                    name_en: "基础用法",
                    thumbnail: "test.png",
                    fileName: "1.1、默认设置"
                },
                {
                    name: "颜色",
                    name_en: "test2",
                    thumbnail: "test2.png",
                    fileName: "1.2、颜色"
                }]
            },
        }
    },
    "iPortal": {
        name: "2、图层",
        name_en: "layer",
        content: {
            "map1": {
                name: "影像",
                name_en: "tiles",
                content: [{
                    name: "单张图片",
                    name_en: "单张图片",
                    thumbnail: "2.1.1、img.png",
                    fileName: "2.1.1、img"
                },
                {
                    name: "xyz服务",
                    name_en: "xyz服务",
                    thumbnail: "2.1.2、xyz.png",
                    fileName: "2.1.2、xyz"
                },
                ]
            },
            // "map2": {
            //     name: "矢量",
            //     name_en: "shp",
            //     content: [{
            //         name: "test",
            //         name_en: "test",
            //         thumbnail: "test.png",
            //         fileName: "test"
            //     },
            //     {
            //         name: "test2",
            //         name_en: "test2",
            //         thumbnail: "test2.png",
            //         fileName: "test2"
            //     }]
            // },
        }
    },
};


/**
 *key值：为exampleConfig配置的key值或者fileName值
 *      （为中间节点时是key值，叶结点是fileName值）
 *value值：fontawesome字体icon名
 *不分层
 */
var sideBarIconConfig = {
    "base": "fa-server",
    "iPortal": "fa-desktop",
    "Online": "fa-cloud",
    "iManager": "fa-group",
    "Elasticsearch": "fa-tasks",
    "plot": "fa-edit",
    "dynamicPlot": "fa-pencil",
    "control": "fa-sliders",
    "components": "fa-window-restore",
    "clientSpatialAnalyst": "fa-object-group",
    "viz": "fa-map",
    "OGC": "fa-globe",
    "mapping": "fa-send"
};

/**
 *key值：为exampleConfig配置的key值
 *value值：fontawesome字体icon名
 *与sideBarIconConfig的区别：sideBarIconConfig包括侧边栏所有层级目录的图标，exampleIconConfig仅包括一级标题的图标
 */
var exampleIconConfig = {
    "base": "fa-server",
    "iPortal": "fa-desktop",
    "Online": "fa-cloud",
    "iManager": "fa-group",
    "Elasticsearch": "fa-tasks",
    "plot": "fa-edit",
    "dynamicPlot": "fa-pencil",
    "control": "fa-sliders",
    "components": "fa-window-restore",
    "clientSpatialAnalyst": "fa-object-group",
    "viz": "fa-map",
    "OGC": "fa-globe",
    "mapping": "fa-send"
};
window.leafletExampleConfig = exampleConfig;
