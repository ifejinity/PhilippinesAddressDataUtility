# PhilippinesAddressDataUtility
This module is intended for working with address-related data and provides utility functions for managing location information.

# How to use

### Import to your project

    import Address from 'your_address_api_path'
    const address = new Address();
    
    // Fetch address data
    await address.getAddress();
    
    // Retrieve all regions
    const regions = address.regions();
    console.log(regions);
    
    // Set a region and retrieve its provinces
    address.setRegion('RegionName');
    const provinces = address.provinces();
    console.log(provinces);
    
    // Set a province and retrieve its municipalities
    address.setProvince('ProvinceName');
    const cities = address.cities();
    console.log(cities);

### Available methods
    getAddress()
    Fetches the address data from the /Api/Address.json endpoint and stores it in the class instance.
    
    Returns: Promise<this>
    regions()
    Retrieves all regions available in the address data.
    
    Returns: string[]
    provinces()
    Retrieves all provinces for the currently set region.
    
    Returns: object
    cities()
    Retrieves all municipalities for the currently set region and province.
    
    Returns: object
    setRegion(region: string)
    Sets the current region.
    
    Parameters:
    
    region (string): The name of the region to set.
    Returns: this
    
    setProvince(province: string)
    Sets the current province.
    
    Parameters:
    
    province (string): The name of the province to set.
    Returns: this
