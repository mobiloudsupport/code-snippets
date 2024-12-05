let previousCount = 0;

function checkCartCount() {
/*Change the selector accordingly*/
    const cartLink = document.querySelector('span.cart-item-count-header--quantity.site-header__cart-indicator');
    if (cartLink) {
        const newCount = parseInt(cartLink.textContent, 10);
        if (newCount !== previousCount) {
            previousCount = newCount;
            /*Change the tab number accordingly*/
            nativeFunctions.updateTab([3]);
            nativeFunctions.updateBadge(3, newCount);
            if (newCount === 0) {
                nativeFunctions.cancelLocalNotifications();
            } else if (newCount > 0) {
                nativeFunctions.scheduleLocalNotifications();
            }
        }
    }
}
setInterval(checkCartCount, 1000); 