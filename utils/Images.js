import {Image} from 'react-native';
import LogoImage from '../assets/finley_logo.png';
import MailboxImage from '../assets/mailbox.png';

export const logoImage = Image.resolveAssetSource(LogoImage).uri;
export const mailboxImage = Image.resolveAssetSource(MailboxImage).uri;
