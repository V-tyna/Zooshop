import { addToFavOrBasket } from '../helpers/eventListeners';

describe('addToFavOrBasket function', () => {
    test('should be called', () => {
        addToFavOrBasket();
        expect(addToFavOrBasket('0007', 'Favorites')).toHaveBeenCalledWith('0007', 'Favorites');
    });
});