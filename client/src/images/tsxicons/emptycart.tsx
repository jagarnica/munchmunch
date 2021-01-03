import * as React from 'react';
import { createIcon } from '@chakra-ui/react';

export const EmptyCart = createIcon({
  displayName: 'EmptyCart',
  viewBox: '0 0 87 87',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M68.034 52.5653C64.7026 52.5739 61.4436 51.5939 58.6695 49.7494C55.8953 47.9048 53.7308 45.2786 52.45 42.2033C51.1692 39.128 50.8296 35.7417 51.4742 32.4733C52.1189 29.2049 53.7187 26.2012 56.0713 23.8425C58.4239 21.4838 61.4235 19.8761 64.6902 19.223C67.957 18.5699 71.3441 18.9008 74.4227 20.1736C77.5014 21.4465 80.1331 23.6042 81.9849 26.3736C83.8366 29.1429 84.825 32.3994 84.825 35.7308C84.8435 37.943 84.4221 40.1369 83.5854 42.1848C82.7486 44.2328 81.5132 46.094 79.9509 47.6604C78.3886 49.2267 76.5306 50.4669 74.4848 51.309C72.439 52.151 70.2463 52.5781 68.034 52.5653ZM75.7857 38.3234L73.5237 35.7134L75.7857 33.1034C76.2071 32.8162 76.5471 32.425 76.7727 31.9677C76.9983 31.5104 77.1019 31.0025 77.0733 30.4934C77.0941 29.979 77.0082 29.4659 76.8211 28.9863C76.634 28.5067 76.3498 28.071 75.9862 27.7066C75.6226 27.3422 75.1875 27.0569 74.7083 26.8688C74.2292 26.6806 73.7162 26.5936 73.2018 26.6132C72.6915 26.583 72.1822 26.6867 71.7244 26.9141C71.2665 27.1415 70.8761 27.4847 70.5918 27.9095L67.9818 30.1715L65.3718 27.9095C65.0888 27.4834 64.6986 27.1393 64.2405 26.9117C63.7823 26.6842 63.2724 26.5812 62.7618 26.6132C62.247 26.5937 61.7337 26.6807 61.2541 26.8687C60.7745 27.0568 60.3389 27.3419 59.9746 27.7062C59.6104 28.0705 59.3252 28.5061 59.1372 28.9857C58.9491 29.4653 58.8621 29.9786 58.8816 30.4934C58.8523 31.0036 58.9564 31.5126 59.1837 31.9703C59.411 32.428 59.7537 32.8185 60.1779 33.1034L62.4312 35.7134L60.1779 38.3234C59.7531 38.6077 59.4099 38.9981 59.1825 39.4559C58.9551 39.9138 58.8514 40.4231 58.8816 40.9334C58.8609 41.4489 58.9469 41.9632 59.1345 42.4438C59.322 42.9245 59.6069 43.3611 59.9713 43.7263C60.3358 44.0916 60.7718 44.3775 61.252 44.5661C61.7322 44.7547 62.2463 44.8419 62.7618 44.8223C63.2724 44.8543 63.7823 44.7513 64.2405 44.5238C64.6986 44.2962 65.0888 43.9521 65.3718 43.526L67.9818 41.264L70.5918 43.526C70.8761 43.9509 71.2665 44.294 71.7244 44.5214C72.1822 44.7488 72.6915 44.8525 73.2018 44.8223C73.7208 44.8424 74.2384 44.754 74.7213 44.5627C75.2041 44.3714 75.6418 44.0814 76.0062 43.7113C76.3706 43.3411 76.6537 42.899 76.8375 42.4132C77.0212 41.9274 77.1016 41.4086 77.0733 40.8899C77.1036 40.3805 77.0008 39.8721 76.7751 39.4144C76.5493 38.9568 76.2084 38.5658 75.7857 38.2799V38.3234ZM52.2 22.4633L48.0066 14.3723C47.6421 13.7848 47.4187 13.1207 47.3541 12.4322C47.3346 11.9174 47.4216 11.4041 47.6097 10.9245C47.7978 10.4449 48.0829 10.0093 48.4471 9.64503C48.8114 9.28075 49.247 8.99563 49.7266 8.80755C50.2062 8.61947 50.7195 8.53247 51.2343 8.55201C51.983 8.5532 52.7162 8.76625 53.3489 9.16653C53.9816 9.56681 54.4882 10.138 54.81 10.814L58.3596 17.6087C55.9969 18.7588 53.9174 20.4164 52.2696 22.4633H52.2ZM38.976 14.3723L30.5892 30.5543H21.8892L32.19 10.814C32.5099 10.142 33.0124 9.57345 33.6401 9.17345C34.2678 8.77346 34.9953 8.55811 35.7396 8.55201C36.2544 8.53247 36.7677 8.61947 37.2473 8.80755C37.7269 8.99563 38.1625 9.28075 38.5268 9.64503C38.8911 10.0093 39.1762 10.4449 39.3643 10.9245C39.5524 11.4041 39.6394 11.9174 39.6198 12.4322C39.5552 13.1207 39.3319 13.7848 38.9673 14.3723H38.976ZM33.8169 34.4345H47.3715V35.7308C47.3577 38.8384 48.048 41.9087 49.3905 44.7113C50.7331 47.5139 52.693 49.976 55.1232 51.9128V66.7985C55.0984 67.3229 55.1802 67.847 55.3638 68.3389C55.5473 68.8307 55.8288 69.2802 56.1912 69.6602C56.5535 70.0401 56.9892 70.3426 57.4719 70.5492C57.9545 70.7558 58.4741 70.8624 58.9991 70.8624C59.5241 70.8624 60.0437 70.7558 60.5263 70.5492C61.0089 70.3426 61.4446 70.0401 61.807 69.6602C62.1693 69.2802 62.4508 68.8307 62.6344 68.3389C62.8179 67.847 62.8998 67.3229 62.8749 66.7985V55.793C64.5666 56.1929 66.296 56.4117 68.034 56.4455C70.1041 56.4622 72.1625 56.1329 74.124 55.4711L69.3303 75.5333C69.0678 76.3628 68.5527 77.0895 67.857 77.612C67.1614 78.1346 66.3199 78.4268 65.4501 78.4478H21.5499C20.6801 78.4268 19.8387 78.1346 19.143 77.612C18.4474 77.0895 17.9323 76.3628 17.6697 75.5333L9.57002 42.2036H6.09002C5.09158 42.1563 4.14967 41.7264 3.45978 41.0031C2.76989 40.2798 2.38501 39.3186 2.38501 38.3191C2.38501 37.3195 2.76989 36.3583 3.45978 35.635C4.14967 34.9117 5.09158 34.4818 6.09002 34.4345H33.8169ZM39.6285 66.7985C39.6285 67.8253 40.0364 68.81 40.7625 69.5361C41.4885 70.2621 42.4732 70.67 43.5 70.67C44.5268 70.67 45.5115 70.2621 46.2376 69.5361C46.9636 68.81 47.3715 67.8253 47.3715 66.7985V46.1099C47.3715 45.0831 46.9636 44.0984 46.2376 43.3723C45.5115 42.6463 44.5268 42.2384 43.5 42.2384C42.4732 42.2384 41.4885 42.6463 40.7625 43.3723C40.0364 44.0984 39.6285 45.0831 39.6285 46.1099V66.8159V66.7985ZM31.8768 46.1099C31.8988 45.5948 31.8139 45.0808 31.6273 44.6001C31.4408 44.1195 31.1567 43.6827 30.793 43.3174C30.4292 42.952 29.9937 42.666 29.514 42.4773C29.0342 42.2886 28.5205 42.2013 28.0053 42.221C27.4898 42.2014 26.9757 42.2886 26.4955 42.4772C26.0153 42.6659 25.5793 42.9518 25.2148 43.317C24.8504 43.6822 24.5655 44.1189 24.378 44.5995C24.1904 45.0802 24.1044 45.5944 24.1251 46.1099V66.8159C24.1044 67.3314 24.1904 67.8457 24.378 68.3263C24.5655 68.8069 24.8504 69.2436 25.2148 69.6088C25.5793 69.9741 26.0153 70.26 26.4955 70.4486C26.9757 70.6372 27.4898 70.7244 28.0053 70.7048C28.5205 70.7245 29.0342 70.6373 29.514 70.4486C29.9937 70.2599 30.4292 69.9738 30.793 69.6084C31.1567 69.2431 31.4408 68.8063 31.6273 68.3257C31.8139 67.8451 31.8988 67.331 31.8768 66.8159V46.1099Z"
      fill="currentcolor"
    />
  ),
});
