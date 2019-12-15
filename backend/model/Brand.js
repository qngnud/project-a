function Brand(xid, xname, xlinkImage, xlinkSound, xbgColor, xdetail) {
    return {
        id: xid,
        name: xname,
        linkImage: xlinkImage,
        linkSound: xlinkSound,
        bgColor: xbgColor,
        detail: xdetail
    }
}

module.exports.Brand = Brand;