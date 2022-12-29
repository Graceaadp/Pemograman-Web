<?php
    $conn = mysqli_connect("localhost", "admin", "959814", "praktikum11");
    $query ="SELECT * FROM karyawan";
    $data = mysqli_query($conn, $query);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Admin</title>
</head>
<body>
    <h1>Daftar Karyawan</h1>
        <a class="tambah" href="tambah.php">Tambah data</a>
    <br><br>
    <table border="1" cellpadding="10" cellspacing="0">
        <tr>
            <td>No.</td>
            <td>Nama</td>
            <td>Email</td>
            <td>Address</td>
            <td>Gender</td>
            <td>Position</td>
            <td>Status</td>
            <td>Action</td>
        </tr>
        <!-- print data from result -->
        <?php $i = 1; ?>
        <?php while($row = mysqli_fetch_assoc($data)) : ?>
        <tr>
            <td><?= $i; ?></td>
            <td><?= $row["nama"]; ?></td>
            <td><?= $row["email"]; ?></td>
            <td><?= $row["address"]; ?></td>
            <td><?= $row["gender"]; ?></td>
            <td><?= $row["position"]; ?></td>
            <td><?= $row["status"]; ?></td>
            <td>
                <a href="hapus.php?id=<?= $row["id"]; ?>"" class = "button">DELETE</a>
                <a href="update.php?id=<?= $row["id"]; ?>"" class = "button1">UPDATE</a>
            </td>
            <?php $i++; ?>
        </tr>
        <?php endwhile; ?>
</body>
</html>