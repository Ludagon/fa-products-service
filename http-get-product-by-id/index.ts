import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const ProductsList = [
    {
      description: 'test1',
      id: '1234',
      price: 24,
      title: 'ProductOne',
      count: 1,
    },
    {
      description: 'test2',
      id: '12345',
      price: 24,
      title: 'ProductOne',
      count: 1,
    },
    {
      description: 'test3',
      id: '123456',
      price: 24,
      title: 'ProductOne',
      count: 1,
    },
    {
      description: 'test4',
      id: '123457',
      price: 24,
      title: 'ProductOne',
      count: 1,
    },
    {
      description: 'Short Product Description7',
      id: '7567ec4b-b10c-48c5-9345-fc73c48a80a1',
      price: 15,
      title: 'ProductTitle',
      count: 1,
    },
    {
      description: 'Short Product Description2',
      id: '7567ec4b-b10c-48c5-9345-fc73c48a80a3',
      price: 23,
      title: 'Product',
      count: 1,
    },
    {
      description: 'Short Product Description4',
      id: '7567ec4b-b10c-48c5-9345-fc73348a80a1',
      price: 15,
      title: 'ProductTest',
      count: 1,
    },
    {
      description: 'Short Product Descriptio1',
      id: '7567ec4b-b10c-48c5-9445-fc73c48a80a2',
      price: 23,
      title: 'Product2',
      count: 1,
    },
    {
      description: 'Short Product Description7',
      id: '7567ec4b-b10c-45c5-9345-fc73c48a80a1',
      price: 15,
      title: 'ProductName',
      count: 1,
    },
  ];
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    if(!context.bindingData.productId){
        context.res = {
            // status: 200, /* Defaults to 200 */
            status:400,
            body: {
                message:"Missing id"
            }
        };
        return;
    }
    let id = context.bindingData.productId;
    if(typeof(context.bindingData.productId) === 'number'){
        id = id.toString();
    }
    let item = ProductsList.find((item) => item.id === id)
    if(item){
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: item
        };
        return;
    }else{
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: 'item not found'
        };
        return;
    }
   
};

export default httpTrigger;