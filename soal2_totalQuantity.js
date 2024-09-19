let productBin = {
    "requestId": null,
    "data": [
      {
        "id": 100000057456,
        "storageId": 100000008207,
        "code": "A01-01-01-A",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR0004010",
        "quantity": 76,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000057456,
        "storageId": 100000012181,
        "code": "A01-01-01-B",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR0004010",
        "quantity": 71,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000065224,
        "storageId": 100000008884,
        "code": "Tgt0-A-A-A-01",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR0004010",
        "quantity": 10,
        "createdTime": "2022-02-08T10:35:19Z",
      }
    ],
    "message": "success"
  };
  
  // Variabel untuk menyimpan total quantity
  let totalQuantity = 0;
  
  // Lakukan looping pada data untuk menjumlahkan quantity dari productCode "FBR0004010"
  productBin.data.forEach((item) => {
    if (item.productCode === "FBR0004010") {
      totalQuantity += item.quantity;
    }
  });
  
  // Cetak total quantity
  console.log(`Total quantity untuk Kode Produk FBR0004010 adalah: ${totalQuantity}`);

  