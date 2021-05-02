import {computed, ref, watch, watchEffect} from "vue";

const paginationRef = ref(null)
const currentPage = ref(1)

function element (totalPages, page) {
    currentPage.value = page
    let liTag = ''
    let activeLi;
    let beforePages = page - 1;
    let afterPages = page + 1;
    if (page > 1) {
        liTag += `<li class="btn prev" onclick="element(${totalPages}, ${page - 1})"><span><i class="fa fa-angle-left"></i> Prev</span></li>`
    }
    if (page > 2)  {
        liTag += `<li class="numb" onclick="element(${totalPages}, 1)"><span>1</span></li>`
        if (page > 3) {
            liTag += `<li class="dots"><span>...</span></li>`
        }
    }

    if (page === totalPages) {
        if (beforePages - 2 > 1) {
            beforePages = beforePages - 2;
        }
    } else if (page === totalPages - 1) {
        beforePages = beforePages - 1
    }

    if (page === 1) {
        afterPages = afterPages + 2;
    } else if (page === 2) {
        afterPages = afterPages + 1
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
        if (pageLength > totalPages) {
            continue;
        }
        if (pageLength === 0) {
            pageLength = pageLength + 1;
        }
        if (page === pageLength) {
            activeLi = "active"
        } else {
            activeLi = ''
        }
        liTag += `<li class="numb ${activeLi}" onclick="element(${totalPages}, ${pageLength})"><span>${pageLength}</span></li>`
    }

    if (page < totalPages - 1)  {
        if (page < totalPages - 2) {
            liTag += `<li class="dots"><span>...</span></li>`
        }
        liTag += `<li class="numb" onclick="element(${totalPages}, ${totalPages})"><span>${totalPages}</span></li>`
    }

    if (page < totalPages) {
        liTag += `<li class="btn next" onclick="element(${totalPages}, ${page + 1})"><span>Next <i class="fa fa-angle-right"></i></span></li>`
    }

    paginationRef.value.innerHTML = liTag
}
// 不然没法回调
window.element = element
export {
    paginationRef,
    element,
    currentPage
}