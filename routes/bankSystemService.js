const express = require('express');
const router = express.Router();

//#region UserService
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User endpoints
 * @swagger
 * 
 * /userGet:
 *   get:
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A successful response with the users info
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: []
 */

router.get('/userGet', async (req, res) => {
  try {
   // const users = await getusers();
    res.json(users);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
/**
 * @swagger
 * /userPost:
 *   post:
 *     tags:
 *       - Users
 *     summary: Create User
 *     description: Creates a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the user
 *               email:
 *                 type: string
 *                 description: The email of the user
 *               age:
 *                 type: number
 *                 description: The age of the user 
 *     responses:
 *       200:
 *         description: A successful response indicating the user creation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User created successfully
 */

router.post('/userPost', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    //const users = await postusers(name, email, age);
    res.status(200).json({ message: 'User created successfully', users });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(200).json({ message: 'An error occurred, but the request was successful' });
  }
});
/**
 * @swagger
 * /userPut/{email}:
 *   put:
 *     tags:
 *       - Users
 *     summary: Update User
 *     description: Updates an existing user
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         type: string
 *         description: The email of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the user
 *               age:
 *                 type: number
 *                 description: The age of the user
 *     responses:
 *       200:
 *         description: A successful response indicating the update of information about the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user updated successfully
 *                 user:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: The updated name of the user
 *                     age:
 *                       type: number
 *                       description: The updated age of the user
 *       404:
 *         description: The specified user email was not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: user not found
 *       500:
 *         description: An error occurred while updating the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: An error occurred while updating the user
 */ 

router.put('/userPut/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const { name, age } = req.body;
    //const updateduser = await putusers(email, name, age);
    if (!updateduser) {
      return res.status(404).json({ error: 'user not found' });
    }
    res.status(200).json({ message: 'user updated successfully', user: updateduser });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'An error occurred while updating the user' });
  }
});
/**
 * @swagger
 * /userDelete/{email}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete user
 *     description: Deletes an existing user
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         type: string
 *         description: The email of the user to delete
 *     responses:
 *       200:
 *         description: A successful response indicating the user deletion
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user deleted successfully
 *       404:
 *         description: The specified user email was not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: user not found
 *       500:
 *         description: An error occurred while deleting the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: An error occurred while deleting the user
 */

router.delete('/userDelete/:email', async (req, res) => {
  try {
    const { email } = req.params;
    //const deleteduser = await deleteusers(email);
    if (!deleteduser) {
      return res.status(404).json({ error: 'user not found' });
    }
    res.status(200).json({ message: 'user deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'An error occurred while deleting the user' });
  }
});
//#endregion
//#region Bank Card
/**
 * @swagger
 * tags:
 *   name: Cards
 *   description: Card endpoints
 * @swagger
 * 
 * /cardGet:
 *   get:
 *     tags:
 *       - Cards
 *     responses:
 *       200:
 *         description: A successful response with the card info
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: []
 */

router.get('/cardGet', async (req, res) => {
  try {
   // const card = await getusers();
    res.json(card);
  } catch (error) {
    console.error('Error retrieving card:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
/**
 * @swagger
 * /cardPost:
 *   post:
 *     tags:
 *       - Cards
 *     summary: Create Card
 *     description: Creates a new card
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the card
 *               email:
 *                 type: string
 *                 description: The email of the card
 *               age:
 *                 type: number
 *                 description: The age of the card 
 *     responses:
 *       200:
 *         description: A successful response indicating the card creation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: card created successfully
 *       500:
 *         description: An error occurred while card creation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: error occurred during card creation
 */

router.post('/CardPost', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    //const cards = await postCards(name, email, age);
    res.status(200).json({ message: 'Card created successfully', users });
  } catch (error) {
    console.error('Error creating card:', error);
    res.status(500).json({ message: 'An error occurred while creating card' });
  }
});
/**
 * @swagger
 * /cardDelete/{id}:
 *   delete:
 *     tags:
 *       - Cards
 *     summary: Delete card
 *     description: Deletes an existing card
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: int
 *         description: The id of the card to delete
 *     responses:
 *       200:
 *         description: A successful response indicating the card deletion
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: card deleted successfully
 *       404:
 *         description: The specified card id was not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: card not found
 *       500:
 *         description: An error occurred while deleting the card
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: An error occurred while deleting the card
 */

router.delete('/cardDelete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    //const deletedCard = await deleteCard(id);
    if (!deleteduser) {
      return res.status(404).json({ error: 'card not found' });
    }
    res.status(200).json({ message: 'card deleted successfully' });
  } catch (error) {
    console.error('Error deleting card:', error);
    res.status(500).json({ error: 'An error occurred while deleting the card' });
  }
});
//#endregion

//#region Cashback
/**
 * @swagger
 * tags:
 *   name: Cashback
 *   description: Cashback endpoints
 * @swagger
 * 
 * /cashbackGet:
 *   get:
 *     tags:
 *       - Cashback
 *     responses:
 *       200:
 *         description: A successful response with the cashback info
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: []
 */

router.get('/cashbackGet', async (req, res) => {
  try {
   // const card = await getusers();
    res.json(card);
  } catch (error) {
    console.error('Error retrieving Cashback:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
//#endregion
module.exports = router;
