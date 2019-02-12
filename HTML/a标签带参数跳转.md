<a href="temp.html?action=chaxun" id="chaxun">查询</a>
    
    <a href="temp.html?action=chaxun" id="chaxun">查询</a>

    function getUrlParam(name) {//a标签跳转获取参数
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return (r[2]); return null;
    }

    $(function () {
        var action = getUrlParam('action');
        if (action == "chaxun") {
            //coding...
        }
    });