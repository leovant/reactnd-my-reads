import { notification } from 'antd';

export default function error(message) {
  notification.error({
    placement: 'bottomLeft',
    message: 'Ooops!',
    description: message
  });
}
