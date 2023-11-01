import Address from './AddressApi.js'

let regionValue;
let municipalityValue;

function setProvince(region) {
    for(const [key, value] of Object.entries(Address)){
        if(key === region) {
            regionValue = value.province_list;
        }
    }
}

function setMunicipality(province) {
    for(const [key, value] of Object.entries(regionValue)){
        if(key === province) {
            municipalityValue = value.municipality_list;
        }
    }
}

// export functions
export default {
    // return all regions
    region() {
        return Object.keys(Address)
    },
    // return all provinces from the given region
    province(region) {
        setProvince(region)
        return Object.keys(regionValue)
    },
    // return all municipality inside of given region and province
    municipality(province) {
        setMunicipality(province)
        return Object.keys(municipalityValue)
    },
    // return all baranhay inside of given region, province, and municipality
    barangay(municipality) {
        for(const [key, value] of Object.entries(municipalityValue)){
            if(key === municipality) {
                return Object.values(value.barangay_list);
            }
        }
    },
    // verify the address if it's actually exist
    verify(region, province, municipality, barangay) {
        try {
            const regionExist = Object.keys(Address).some(key => key === region);
            const provinceExist = Object.keys(Address[region].province_list).some(key => key === province);
            const municipalityExist = Object.keys(Address[region].province_list[province].municipality_list).some(key => key === municipality);
            const barangayExist = Object.values(Address[region].province_list[province].municipality_list[municipality].barangay_list).some(value => value === barangay);

            if (regionExist && provinceExist && municipalityExist && barangayExist) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }
}