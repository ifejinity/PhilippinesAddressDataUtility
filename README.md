# PhilippinesAddressDataUtility
This module is intended for working with address-related data and provides utility functions for managing location information.

# How to use

### Import to your project

    import Address from 'your_address_api_path'
    Address.region() //returns all the region from the philippines


### Available methods
    //returns all region
    region()
    
    //returns all provinces from the given region_name
    province('region_name') 
    
    //returns all municipality from the given province_name 
    municipality('province_name')
    
    // returns all baranggay from the given municipality_name
    barangay('municipality_name')

    //return false if the given 'region_name', 'province_name', 'municipality_name', and 'barangay_name' doesn't exist on 'address_api', otherwise returns true
    verify('region_name', 'province_name', 'municipality_name', 'barangay_name')
