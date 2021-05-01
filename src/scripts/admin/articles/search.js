import { ref } from "vue";

const restaurants = ref([]);
const state = ref('')
const loadAll = () => {
    return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号", data: {
                id: '12987125',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
            } }
    ];
};

let timeout;
const querySearchAsync = (queryString, cb) => {
    let results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        cb(results);
    }, 1000 * Math.random());
};
const createFilter = (queryString) => {
    return (restaurant) => {
        return (
            restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
            0
        );
    };
};

const handleSelect = (item) => {
    console.log(item);
};

export {
    restaurants,
    state,
    loadAll,
    querySearchAsync,
    handleSelect,
}