import os,sys
sys.path.append(os.path.realpath("../../../src"))
import json
import unittest
from sweetscomplete.entity.product import Product
class TestProduct(unittest.TestCase) :
    productFromDict = None

    testDict = dict({
        'productKey'  : '00000000',
        'productPhoto': 'TEST',
        'skuNumber'   : 'TEST0000',
        'category'    : 'test',
        'title'       : 'Test',
        'description' : 'test',
        'price'       : 1.11,
        'unit'        : 'test',
        'costPerUnit' : 2.22,
        'unitsOnHand' : 333
    })

    def setUp(self) :
        self.productFromDict = Product(self.testDict)

    def test_product_from_dict(self) :
        expected = '00000000'
        actual   = self.productFromDict.getKey()
        self.assertEqual(expected, actual)

    def test_product_from_dict_get_and_set(self) :
        self.productFromDict.set('skuNumber', '99999999')
        expected = '99999999'
        actual   = self.productFromDict.get('skuNumber')
        self.assertEqual(expected, actual)


def main() :
    unittest.main()

if __name__ == "__main__":
    main()