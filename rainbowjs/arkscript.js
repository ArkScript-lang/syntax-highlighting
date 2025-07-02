Rainbow.extend('arkscript', [
    {
        /* making peace with HTML */
        name: 'plain',
        pattern: /&gt;|&lt;/g
    },
    {
        name: 'comment',
        pattern: /#.*$/gm
    },
    {
        name: 'constant.language',
        pattern: /true|false|nil/g
    },
    {
        name: 'constant.symbol',
        pattern: /'[^()\s#']+/g
    },
    {
        name: 'constant.number',
        pattern: /\b\d+(?:\.\d*)?\b/g
    },
    {
        name: 'string',
        pattern: /".+?"/g
    },
    {
        matches: {
            1: 'storage.function',
            2: 'variable'
        },
        pattern: /\(\s*(let|mut|set)\s+\(?(\S+)/g
    },
    {
        matches: {
            1: 'keyword'
        },
        pattern: /\(\s*(begin|if|fun|set|while|let|mut|del|import|macro|\$if)(?=[\]()\s#])/g
    },
    {
        matches: {
            1: 'entity.function'
        },
        pattern: /\(\s*(=|<|>|<=|>=|!=|@|@@|@=|@@=|\+|\-|\*|\/|head|tail|nil\?|list|len|append|append!|concat|concat!|pop|pop!|print|puts|input|time|empty\?|assert|toNumber|toString|and|or|mod|type|hasField|not|\$undef|\$repr|\$as-is|\$symcat|\$argcount|\w+:\w+)(?=[\]()\s#])/g
    }
]);
