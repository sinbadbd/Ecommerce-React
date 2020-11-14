export default function formateCurrent(num) {
    return "$" + Number(num.toFixed(1)).toLocaleString + "";
}