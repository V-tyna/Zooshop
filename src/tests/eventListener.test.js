import { addToFavOrBasket } from '../helpers/eventListeners';

describe('addToFavOrBasket function', () => {
    test('should be called', () => {
        addToFavOrBasket();
        expect(addToFavOrBasket('0007', 'Basket')).toHaveBeenCalledWith('0007', 'Basket');
    });
});