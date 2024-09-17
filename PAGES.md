# Pages

This file contains information about all of the generated pages.

## Dashboard

The admin dashboard page

Type: Dashboard (_A dashboard page_)

Page title: `Admin dashboard`

Page message: `This is the admin dashboard.`

*Widgets*

* **Dashboard Note** (Message) - No description* **24 H Revenue** (Stat) - No description
    * **Displays**: `$1,000,000`
* **Todos** (List) - No description
    * `Do the laundry` - No description
    * `Buy groceries` - No description
    * `Call mom` - No description

*Post-actions*

* **Open Products** (goes to _Products_) - No description




## Products

The list of products page

Type: List Page (_A page that lists items_)

Page title: `Products`

Page message: `This is the list of products. You can edit or delete them.`



*Columns*

* **Id** (Number) - The unique identifier for each product
* **Name** (String) - No description
* **Description** (String) - The description of the product
* **Buys Last Week** (Number) - The number of buys in the last week
* **Price** (String) - The price of the product

*Pre-actions*

* **Create** (goes to _Create Product_) - No description

*Post-actions*

* **Open Dashboard** (goes to _Dashboard_) - No description

*Item actions*

* **Edit** (goes to _Edit Product_) - Allow the user to navigate to the EditProduct page
* **Delete** (goes to _Products_) - No description


## Edit Product

No description

Type: Edit Page (_A page that edits an item_)

Page title: `Edit Vacuum Cleaner`

Page message: `You are editing product 465191de-2108-4dc0-ac81-d3d53f2176e1 called Vacuum Cleaner.`


*Fields*

* **Name** (String) - The name of the product
* **Description** (String) - No description
* **Price** (String) - The price of the product

*Post-actions*

* **Cancel** (goes to _Products_) - Cancel goes back to the Products page
* **Save** (goes to _Products_) - Save goes back to the Products page
* **Delete** (goes to _Products_) - No description



## Create Product

No description

Type: Edit Page (_A page that edits an item_)

Page title: `Create Product`

Page message: `You are creating a new product.`


*Fields*

* **Name Of New Product** (String) - The name of the product
* **Description Of New Product** (String) - No description
* **Price Of New Product** (String) - The price of the product

*Post-actions*

* **Cancel** (goes to _Products_) - Cancel goes back to the Products page
* **Save** (goes to _Products_) - Save goes back to the Products page



