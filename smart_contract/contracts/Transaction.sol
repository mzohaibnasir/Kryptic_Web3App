// SPDX-License-Identifier:MIT 
pragma solidity ^0.8.0;

contract Transaction{
    uint256 transactionCount;
    event Transfer(address from,address receiver, uint amount, string message,uint256 timestamp, string keyword);
    //fn that we are going to call oremit later

    struct TransferStruct{
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    TransferStruct[] transactions;


    function addToBlockchain(address payable receiver,uint amount, string memory message, string memory keyword) public {
        transactionCount+=1;
        transactions.push(TransferStruct(msg.sender,receiver,amount,message,block.timestamp,keyword));
        emit Transfer(msg.sender,receiver,amount,message,block.timestamp,keyword);
    }
    function get AllTransactions() public view returns(TransferStruct[] memory) {

    }
    function getTransaction count() public view returns(uint256{
        return transactionCount;

    }
}