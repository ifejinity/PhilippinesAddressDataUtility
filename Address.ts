class Address {
    public address:any = Object();
    public region:string;
    public province:string;

    constructor() {
        
    }

    /**
     * get addresses
     */
    public getAddress = async(): Promise<this> => {
        const address = await fetch('/Api/Address.json');
        const response = await address.json();
        this.address = response;
        return this;
    }

    /**
     * get all regions
     */
    public regions = (): string[] => {
        return Object.keys(this.address)
    }

    /**
     * get all provinces
     */
    public provinces = (): object => {
        return Object.keys(this.address[this.region].province_list);
    }

    /**
     * get all municipality
     */
    public cities = (): object => {
        return Object.keys(this.address[this.region].province_list[this.province].municipality_list);
    }

    /**
     * set region
     */
    public setRegion = (region:string): this => {
        this.region = region;
        return this;
    }

    /**
     * set province
     */
    public setProvince = (province:string): this => {
        this.province = province
        return this;
    }
}

/**
 * export address class
 */
export default Address;
