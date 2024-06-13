import {Image} from 'react-native';
import LogoImage from '../assets/finley_logo.png';
import LogoIconImage from '../assets/finley_icon_logo.png';
import MailboxImage from '../assets/mailbox.png';
import FinleyBackground from '../assets/finley_background.jpg';
import MailboxesImage from '../assets/mailboxes.png';
import MailboxPadImage from '../assets/mailbox_pad.png';
import MailboxOpenImage from '../assets/mailbox_open.png';
import LettersImage from '../assets/letters.png';
import FinleyFlagImage from '../assets/finley_flag.png';
import NotificationsImage from '../assets/notifications.png';

export const logoImage = Image.resolveAssetSource(LogoImage).uri;
export const logoIconImage = Image.resolveAssetSource(LogoIconImage).uri;
export const mailboxImage = Image.resolveAssetSource(MailboxImage).uri;
export const finleyBackgroundImage =
  Image.resolveAssetSource(FinleyBackground).uri;
export const mailboxesImage = Image.resolveAssetSource(MailboxesImage).uri;
export const mailboxPadImage = Image.resolveAssetSource(MailboxPadImage).uri;
export const mailboxOpenImage = Image.resolveAssetSource(MailboxOpenImage).uri;
export const lettersImage = Image.resolveAssetSource(LettersImage).uri;
export const finleyFlagImage = Image.resolveAssetSource(FinleyFlagImage).uri;
export const notificationsImage =
  Image.resolveAssetSource(NotificationsImage).uri;
