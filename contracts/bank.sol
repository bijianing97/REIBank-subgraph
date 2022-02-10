pragma solidity 0.6.2;

contract MyBank {
  mapping(address => uint256) public balanceOf;

  event Deposit(address indexed from, uint256 indexed amount);
  event Transfer(address indexed from, address indexed to, uint256 indexed amount);
  event Withdraw(address indexed from, uint256 indexed amount);

  function deposit() external payable {
    require(msg.value > 0, "value must be greater than 0");
    balanceOf[msg.sender] += msg.value;
    emit Deposit(msg.sender, msg.value);
  }

  function withdraw(uint256 amount) external {
    require(amount > 0, "amount must be greater than 0");
    require(balanceOf[msg.sender] >= amount, "withdraw amount exceeds balance");
    balanceOf[msg.sender] -= amount;
    msg.sender.transfer(amount);
    emit Withdraw(msg.sender, amount);
  }

  function transfer(address to, uint256 amount) external {
    require(amount > 0, "amount must be greater than 0");
    require(balanceOf[msg.sender] >= amount, "transfer amount exceeds balance");
    require(msg.sender != to, "invalid transfer");
    balanceOf[msg.sender] -= amount;
    balanceOf[to] += amount;
    emit Transfer(msg.sender, to, amount);
  }
}