export default function quoteMess(data) {
    return data.replace(/(\'|\")(.*?)(\'|\")/gi, '"" + "$2" + ""').replace(/"|'/gi, '`');
}